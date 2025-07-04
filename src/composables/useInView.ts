import { onMounted, ref } from 'vue'

export function useInView() {
  const el = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (!el.value) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.value!.classList.add('in-view')
        io.disconnect()
      }
    })
    io.observe(el.value)
  })

  return { el }
}
