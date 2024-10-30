export const isHaveSlot = (name: string) => {
  const slots = useSlots()
  return !!slots[name]
}
