<script lang="ts">
  import { _ } from 'svelte-i18n'

  import { isEmailValid } from '$lib/utils';
  import MessageSentSuccess from '$lib/components/MessageSentSuccess.svelte';

  const MIN_NAME_LENGTH = 2
  const MIN_MESSAGE_LENGTH = 50

  let showSuccess = false
  let isSubmitted = false
  let values = {
    email: "",
    firstName: "",
    lastName: "",
    message: ""
  }
  let errors = {
    email: false,
    firstName: false,
    lastName: false,
    message: false
  }

  $: errors = {
    email: !isEmailValid(values.email),
    firstName: values.firstName.length < MIN_NAME_LENGTH,
    lastName: values.lastName.length < MIN_NAME_LENGTH,
    message: values.message.length < MIN_MESSAGE_LENGTH,
  }

  const onSubmit = (): void => {
    isSubmitted = true

    let isFormValid = Object.keys(errors).every(error => !errors[error])

    if (isFormValid) {
      isSubmitted = false

      Object.keys(values).forEach(value => {
        values[value] = ""
      });

      values = values
      showSuccess = true
    }
  }
</script>

<h1 class="mt-5">{$_('contact')}</h1>

<form class="mt-4 needs-validation" novalidate on:submit|preventDefault={onSubmit}>
  <div class="d-flex justify-content-end">
    <p class="d-inline alert alert-warning w-fit-content p-2">{$_('contact_page.required_field')}</p>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-floating mb-3" aria-live="polite">
        <input 
          type="text" 
          class="form-control"
          class:is-invalid={isSubmitted && errors.firstName} 
          id="firstnameInput" 
          placeholder="David" 
          minlength={MIN_NAME_LENGTH} 
          required
          aria-describedby="lastnameInput invalidFirstname"
          bind:value={values.firstName}
        >
        <label for="firstnameInput">
          {$_('firstname')}
          <span class="text-danger">*</span>
        </label>
        {#if isSubmitted && errors.firstName}
          <p id="invalidFirstname" class="text-danger">{$_('contact_page.invalid_info.firstname', { values: { length: MIN_NAME_LENGTH }})}</p>
        {/if}
      </div>
    </div>
    <div class="col">
      <div class="form-floating mb-3" aria-live="polite">
        <input
          type="text"
          class="form-control"
          class:is-invalid={isSubmitted && errors.lastName} 
          id="lastnameInput"
          placeholder="Latence"
          minlength={MIN_NAME_LENGTH} 
          required
          aria-describedby="lastnameInput invalidLastname"
          bind:value={values.lastName}
        >
        <label for="lastnameInput">
          {$_('lastname')}
          <span class="text-danger">*</span>
        </label>
        {#if isSubmitted && errors.lastName}
          <p id="invalidLastname" class="text-danger">{$_('contact_page.invalid_info.lastname', { values: { length: MIN_NAME_LENGTH }})}</p>
        {/if}
      </div>
    </div>
  </div>

  <div class="form-floating mb-3" aria-live="polite">
    <input
      type="text"
      class="form-control"
      class:is-invalid={isSubmitted && errors.email} 
      id="emailInput"
      placeholder="name@email.com"
      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
      required
      aria-describedby="emailInput invalidEmail"
      bind:value={values.email}
    >
    <label for="emailInput">
      {$_('email_addresse')}
      <span class="text-danger">*</span>
    </label>
    {#if isSubmitted && errors.email}
      <p id="invalidEmail" class="text-danger">{$_('contact_page.invalid_info.email')}</p>
    {/if}
  </div>

  <div class="form-floating mb-3">
    <textarea
      class="form-control"
      class:is-invalid={isSubmitted && errors.message} 
      id="messageInput"
      style="height: 100px"
      placeholder="just a message"
      minlength={MIN_MESSAGE_LENGTH} 
      required
      aria-describedby="messageInput invalidMessage"
      bind:value={values.message}
    ></textarea>
    <label for="messageInput">
      Message
      <span class="text-danger">*</span>
    </label>
    {#if errors.message}
      <p id="invalidMessage" class="mt-1 text-end" aria-live="polite" aria-atomic="true">
        {$_('contact_page.invalid_info.message_min_length', { values: { length: MIN_MESSAGE_LENGTH }})} 
        ({$_('contact_page.currently').toLocaleLowerCase()} {values.message.length})
      </p>
    {/if}
  </div>

  <div class="col-12">
    <button class="btn btn-success" type="submit">{$_('contact_page.submit')}</button>
  </div>
</form>
<MessageSentSuccess bind:show={showSuccess}/>
