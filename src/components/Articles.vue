<template>
  <section class="articles">
    <div class="cnt">
      <div class="articles-title">
        Articles
      </div>

      <template v-if="loading">
        <div class="loader">
          Loading...
        </div>
      </template>


      <template v-else-if="getData">
        <div class="articles-block-wrapper">
          <router-link v-for="post in paginatedData"
                       :key="post?.id"
                       :to="post?.id"
                       class="articles-block"
          >
            <div class="articles-block__img">
              <img
                  :src="post?.image"
                  :alt="`picture-${post?.id}`"
              />
            </div>
            <span>{{ post?.preview }}</span>

            <div class="articles-block__read-more">
              Read more
            </div>
          </router-link>
        </div>

        <button v-if="false" @click="backPage" class="paginate-buttons">
          prev
        </button>

        <button
            v-for="item in Math.ceil(getData.length / perPage)"
            :key="item"
            class="paginate-buttons"
            :class="{'active-page': page === item}"
            @click="() => goToPage(item)"
        >
          {{ item }}
        </button>

        <button v-if="false" @click="nextPage" class="paginate-buttons">
          next
        </button>

      </template>

      <template v-else>
        Empty Data
      </template>

    </div>
  </section>
</template>

<script setup>
import {onMounted, ref} from "vue";

// Hooks
import pagination from "@/hooks/pagination.js";

const {
  page,
  setData,
  getData,
  paginatedData,
  perPage,
  nextPage,
  backPage,
  goToPage
} = pagination()

const loading = ref(false)
const loaderStart = () => loading.value = true
const loaderStop = () => loading.value = false

const getPosts = async () => {
  try {
    loaderStart()
    const data = await fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts`)
    return data.json()
  } catch (error) {
    return console.log('Error')
  } finally {
    setTimeout(() => loaderStop(), 1e3)
  }
}
onMounted(async () => {
  const posts = await getPosts()
  setData(posts)
})
</script>

<style scoped lang="scss">
.articles {
  padding: 120px 112px 140px;

  .articles-title {
    color: #101010;
    font-size: 84px;
    line-height: 84px;
    margin-bottom: 59px;
  }

  .articles-block-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    &:hover {
      cursor: pointer;
    }

    .articles-block {
      width: 280px;
      margin: 20px 16px 40px;
      color: #101010;
      text-decoration: none;

      &:hover {
        .articles-block__read-more {
          opacity: 1;
        }
      }


      .articles-block__img {
        margin-bottom: 24px;
        width: 100%;
        height: 210px;
        overflow: hidden;

        img {
          display: block;
          line-height: 0;
          text-indent: -999em;
          position: relative;
          height: inherit;
          width: inherit;
          background-color: rgb(50, 53, 53);

          &::after {
            content: '';
            display: block;
            background-color: inherit;
            background-position: top left;
            background-size: cover;
            padding: 50% 0;
            position: relative;
          }
        }
      }

      .articles-block__read-more {
        display: block;
        margin-top: 12px;
        opacity: 0;
        transition: all 0.25s ease-in-out;
        color: #E2BEFF;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.loader {
  height: 90vh;
  padding-top: 10%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.paginate-buttons {
  height: 44px;
  width: 44px;
  border-radius: 12px;
  cursor: pointer;
  margin: 0 4px;
  background-color: rgb(242, 242, 242);
  border: none;
  color: #101010;
}

.paginate-buttons:hover {
  background-color: #F3F3F3;
}

.active-page {
  background-color: #101010;
  //border: 1px solid #3498db;
  color: white;
}

.active-page:hover {
  background-color: #101010;
}
</style>