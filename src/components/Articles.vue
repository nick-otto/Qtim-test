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

      <template v-else>
        <div class="articles-block-wrapper">
          <router-link v-for="post in posts"
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

        <vue-awesome-paginate
            :total-items="Number(posts?.length)"
            :items-per-page="8"
            :max-pages-shown="5"
            v-model="currentPage"
            @click="onClickHandler"
        />
      </template>
      
    </div>
  </section>
</template>

<script setup>
import {onMounted, ref} from "vue";

const posts = ref(null)
const loading = ref(false)
const currentPage = ref(1);
const onClickHandler = (currentPage) => {
  getPosts(currentPage)
};
const loaderStart = () => loading.value = true
const loaderStop = () => loading.value = false

const getPosts = async (currentPage) => {
  try {
    loaderStart()
    // const data = await fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts?per_page=8&page=${currentPage || 1}`)
    const data = await fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts`)
    return data.json()
  } catch (error) {
    return console.log('Error')
  } finally {
    setTimeout(() => loaderStop(), 1e3)
  }
}
onMounted(async () => {
  posts.value = await getPosts()
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
</style>