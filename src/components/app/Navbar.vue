<template>
  <nav class="navbar transparent">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#">
          <i class="material-icons blue-text">polymer</i>
        </a>
        <span class="flow-text black-text">LRvue</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
          >
            User
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <a href="#" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </a>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>


<style>
.dropdown-trigger{
  border-radius: 35px;
}

</style>