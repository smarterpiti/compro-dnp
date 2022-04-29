import { onMounted, ref } from 'vue'

export default function () {
    const data = ref<ProductRepair[]>([])

    onMounted(() => {
        data.value = [
            {              
                img: "bottle_box",
                type: "repair",
                product: "Refined Night Serum",
              },
              {
                img: "bottle_box",
                type: "repair",
                product: "Skin Tranquility",
              },
              {              
                img: "bottle_box",
                type: "repair",
                product: "Refined Night Serum",
              },
              {
                img: "bottle_box",
                type: "repair",
                product: "Skin Tranquility",
              },
              {              
                img: "bottle_box",
                type: "repair",
                product: "Refined Night Serum",
              },
              {
                img: "bottle_box",
                type: "repair",
                product: "Skin Tranquility",
              },
        ]
    })
  
    return { data }
  }
