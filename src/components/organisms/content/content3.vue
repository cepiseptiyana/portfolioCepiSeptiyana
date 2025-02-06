<script setup>
import formContent3 from '@/components/elements/content/content3/form.vue'
import heading from '@/components/elements/content/content3/heading.vue'
import Paragraph from '@/components/elements/content/content3/paragraph.vue'

import { validate } from 'email-validator'
import Swal from 'sweetalert2'

// Props
let text = {
  placeholderUsername: 'username',
  placeholderUseremail: 'email',
  placeholderUsertext: 'komentar',
  contact: 'contact',
  paragraph:
    'whether you have question, want to start a project or simply want to connect fell free to send me a message in the connect form',
}

function validationForm() {
  let username = document.getElementById('username').value
  let email = document.getElementById('email').value
  let text = document.getElementById('komentar').value

  if (username.length != 0) {
    if (email.length != 0) {
      if (validate(email)) {
        if (text.length != 0) {
          Swal.fire({
            title: 'success!',
            text: 'data berhasil di kirim :)',
            icon: 'success',
            confirmButtonText: 'Okay',
          })
        } else {
          Swal.fire({
            title: 'Peringatan!',
            text: 'text masih kosong :)',
            icon: 'warning',
            confirmButtonText: 'Okay',
          })
        }
      } else {
        Swal.fire({
          title: 'Peringatan!',
          text: 'email tidak di ketahui :(',
          icon: 'warning',
          confirmButtonText: 'Okay',
        })
      }
    } else {
      Swal.fire({
        title: 'Peringatan!',
        text: 'email masih kosong :)',
        icon: 'warning',
        confirmButtonText: 'Okay',
      })
    }
  } else {
    Swal.fire({
      title: 'Peringatan!',
      text: 'username masih kosong :)',
      icon: 'warning',
      confirmButtonText: 'Okay',
    })
  }
}
// DefineModel
function sendValueFormToWa() {
  validationForm()
}
</script>

<template>
  <div id="content3" class="container-fluid">
    <div class="container">
      <div class="row bg-secondary-subtle">
        <div class="col-md bg-dark">
          <heading judulText="Let's chat" />
          <Paragraph :text="text.paragraph" />
        </div>
        <div class="col-md bg-light">
          <formContent3 :text="text" :sendValueFormToWa="sendValueFormToWa" />
        </div>
      </div>
    </div>
  </div>
</template>
