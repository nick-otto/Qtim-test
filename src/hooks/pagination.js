import {ref, computed} from "vue";

export default function pagination() {
    const page = ref(1);

    const list = ref(null)

    const setData = payload => list.value = payload
    const getData = computed(() => list.value)

    const perPage = 8;

    const paginatedData = computed(() =>
        list.value?.slice((page.value - 1) * perPage, page.value * perPage)
    );

    const nextPage = () => {
        if (page.value !== Math.ceil(list.value?.length / perPage)) {
            page.value += 1;
        }
    };

    const backPage = () => {
        if (page.value !== 1) {
            page.value -= 1;
        }
    };

    const goToPage = (numPage) => {
        page.value = numPage;
    };

    return {
        page,
        getData,
        setData,
        paginatedData,
        perPage,
        nextPage,
        backPage,
        goToPage
    };
}