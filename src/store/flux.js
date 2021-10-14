const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      openModal: () => {
        const modals = document.querySelectorAll('[data-modal]')
        modals.forEach(function (trigger) {
          trigger.addEventListener('click', function (event) {
            event.preventDefault()
            const modal = document.getElementById(trigger.dataset.modal)
            modal.classList.add('open')
            const exits = modal.querySelectorAll('.modal-exit')
            exits.forEach(function (exit) {
              exit.addEventListener('click', function (event) {
                event.preventDefault()
                modal.classList.remove('open')
              })
            })
          })
        })
      },
      contactRequest: (data) => {
         const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }
        fetch('https://www.awtosuite.pro/marketing/ajax_add_contact_request_saopaulo', requestOptions)
          .then(response => response.json())
          .catch(error => console.log('error', error))
      },
      newsletterRequest: (data) => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }
        fetch('https://www.awtosuite.pro/marketing/ajax_add_notification_request_saopaulo', requestOptions)
          .then(response => response.json())
          .catch(error => console.log('error', error))
      }
    }
  }
}

export default getState
