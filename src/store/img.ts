export const useImgStore = defineStore('img', () => {
  const imgIndex = ref(0)

  const imgList = ref([
    { innerImg: '/assets/img/Rag_Body.png', outerImg: '/assets/img/Rag_Clothes.png' },
    { innerImg: '/assets/img/Rag_Body.png', outerImg: '/assets/img/Rag_Body.png' },
    { innerImg: '/assets/img/Rag_Clothes.png', outerImg: '/assets/img/Rag_Clothes.png' },
  ])

  return { imgIndex, imgList }
})
