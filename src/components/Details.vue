<template>
  <div class="details">
    <div class="details-title">
      {{ post?.title }}
    </div>
    <div class="details-img">
      <img :src="post?.image" :alt="`picture-${post?.id}`" />
    </div>
    <div class="details-about">About</div>
    <div class="details-description">
      {{ post?.description }}
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const postId = route.params.postId
const post = ref(null)

const getPost = async (params = {}) => {
  try {
    const data = await fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${postId}`)
    return data.json()
  } catch (error) {
    return console.log('Error')
  }
}

onMounted(async () => {
  post.value = await getPost()
})
</script>


<style scoped lang="scss">
.details {
  padding: 120px 112px 80px;

  .details-title {
    color: #101010;
    font-size: 84px;
    line-height: 84px;
    margin-bottom: 59px;
  }

  .details-img {
    width: 100%;

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

  .details-about {
    margin-top: 80px;
    margin-bottom: 32px;
  }

  .details-description {

    font-size: 36px;
    line-height: 44px;
    max-width: 695px;
  }
}
</style>