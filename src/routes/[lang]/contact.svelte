<script lang="ts">
  import { _ } from 'svelte-i18n'
</script>

<h1 class="mt-5">{$_('contact')}</h1>

<form class="mt-4 needs-validation" novalidate>
  <div class="d-flex justify-content-end">
    <p class="d-inline alert alert-warning w-fit-content p-2">{$_('contact_page.required_field')}</p>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="firstnameInput" placeholder="David" required>
        <label for="firstnameInput">
          {$_('firstname')}
          <span class="text-danger">*</span>
        </label>
      </div>
    </div>
    <div class="col">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="lastnameInput" placeholder="Latence" required>
        <label for="lastnameInput">
          {$_('lastname')}
          <span class="text-danger">*</span>
        </label>
      </div>
    </div>
  </div>

  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="emailInput" placeholder="name@email.com" required>
    <label for="emailInput">
      {$_('email_addresse')}
      <span class="text-danger">*</span>
    </label>
  </div>

  <div class="form-floating mb-3">
    <textarea class="form-control" id="messageInput" style="height: 100px" placeholder="just a message" required></textarea>
    <label for="messageInput">
      Message
      <span class="text-danger">*</span>
    </label>
  </div>

  <div class="col-12">
    <button class="btn btn-primary" type="submit">{$_('contact_page.submit')}</button>
  </div>
</form>