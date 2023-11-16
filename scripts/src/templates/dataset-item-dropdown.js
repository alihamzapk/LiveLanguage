export default (data) => (
    `<dataset>
  <a href="${data.url}">${data.title}</a>
  ${data.language_code || ''}
</dataset>`
)
