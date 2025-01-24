import Swal from 'sweetalert2'

let sweetAlert = {
  success() {
    Swal.fire({
      title: 'success',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Cool',
    })
  },

  warning() {
    Swal.fire({
      title: 'warning!',
      text: 'Do you want to continue',
      icon: 'warning',
      confirmButtonText: 'Cool',
    })
  },

  info() {
    Swal.fire({
      title: 'info!',
      text: 'Do you want to continue',
      icon: 'info',
      confirmButtonText: 'Cool',
    })
  },

  question() {
    Swal.fire({
      title: 'Question!',
      text: 'Do you want to continue',
      icon: 'question',
      confirmButtonText: 'Cool',
    })
  },
}
