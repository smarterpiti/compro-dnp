<script lang="ts" setup>
  import {toRefs, ref} from 'vue';
  import ProductCard from './ProductCard.vue';
  import useGetQueries from "../../composable/useGetQueries";
  import {Product} from "../../typings/Product";

  type Prop = {
    hovered: number | null;
  }
  const props = defineProps<Prop>();
  const { hovered } = toRefs(props);

  const show = ref<number>(0);
  const search = ref<string>('');

  const { data: products, setSearch } = useGetQueries<Product>('product', {
    perPage: 5,
    autoFetch: false
  });

  const productSeries = [
    {
      title: 'REPAIR',
      usedAs: [
        'Skin Tranquilty',
        'Refine Night'
      ]
    },
    {
      title: 'PREVENT',
      usedAs: [
        'Antioxidant Antaxhanthin',
        'Antioxidant Resveratrol',
      ]
    },
    {
      title: 'GLOW',
      usedAs: [
        'C & E with Ferulic',
        'Antioxidant C Ferulic',
        'Antioxidant C Sylmarin',
        'Tranex & Kojic with B3'
      ]
    },
    {
      title: 'HYDRATE',
      usedAs: [
        'Caffeine Hydrating',
        'Phyto Hydro',
        'Antioxidant C Sylmarin',
        'Tranex & Kojic with B3'
      ]
    }
  ];

  let timeout: any;
  const handleSearch = (e: KeyboardEvent) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (e.code === 'Enter') {
      setSearch(search.value)
    }

    timeout = setTimeout(() => {
      setSearch(search.value)
    }, 1500)
  }
</script>

<template>
  <Transition name="fade">
    <div
      v-show="hovered === 0"
      @mouseleave="search = ''"
      class="absolute left-0 flex w-full px-20 bg-white shadow-lg top-24"
    >
      <div class="w-[360px] -ml-24">
        <div class="flex items-center h-full pl-24 bg-gray-100">
          <h3 class="text-4xl text-hydrate">Explore Our Products</h3>
        </div>
      </div>
      <div class="relative flex-1">
        <div class="grid flex-1 w-full h-full grid-cols-4 gap-10 pb-10">
          <ProductCard
            v-for="(item, index) in productSeries"
            :key="item.title"
            :item="item"
            @mouseenter="show = index"
          />
        </div>
        <div class="absolute top-0 right-[0px] flex gap-10 -left-[80px]">
          <div class="h-20 basis-1/4"/>
          <div class="basis-3/4">
            <div class="flex order-2 w-full h-20 col-span-3">
              <div class="relative flex-1 h-14 bg-white-smoke">
                <input
                  class="w-full h-full text-gray-600 font-din-next-lt-pro-light px-14 bg-white-smoke focus:outline-none"
                  v-model="search"
                  placeholder="Search..."
                  @keyup="handleSearch"
                />
                <Transition name="fade">
                  <div
                    class="absolute w-full bg-gray-200 top-12 px-14"
                    v-show="search && search.length > 3"
                  >
                    <ul>
                      <li
                        v-for="item in products"
                        :key="item.id"
                        class="py-3 text-gray-400 font-din-next-lt-pro-bold"
                      >
                        <a
                          :href="'/products/' + item.slug"
                          @click.prevent="$router.push('/products/' + item.slug)"
                        >
                          <span class="uppercase">{{ item.category.name }}</span> | {{ item.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </Transition>
              </div>
              <button class="flex items-center justify-center w-14 h-14 bg-hydrate">
                <img src="/img/search.svg" class="w-8 h-8"/>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </Transition>
</template>