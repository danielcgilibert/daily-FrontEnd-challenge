export interface Award {
  id: string
  items: Item[]
  title: string
}

export interface Item {
  title: string
  photoUrL: string
  id: string
}
