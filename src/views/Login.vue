<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title center">LRvue</span>
      <div class="input-field">
        <input id="email" type="text" class="validate" />
        <label for="email">Email</label>
        <small class="helper-text invalid">Введите Email</small>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Введите пароль</small>
      </div>
    </div>
    <div class="card-action">
      <div> 
        <button class="btn waves-effect waves-light auth-submit blue" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        <a href="/">🦊</a>
      </p>
    </div>
  </form>
</template>