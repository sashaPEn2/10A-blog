export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Этот сайт был обновлен. ` +
      `Перезагрузить, чтобы отобразить последнюю версию?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
