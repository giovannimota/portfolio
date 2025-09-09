export type Content = Title | Description | Code

export type Title = {
  id: 'title'
  text: string
}

export type Description = {
  id: 'description'
  text: string
}

export type Code = {
  id: 'code'
  code: string
}
