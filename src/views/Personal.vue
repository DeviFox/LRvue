<template>
    
<div>
    <h4>Фамилия Имя Отчество</h4>
  <div class="history-chart">
    <canvas></canvas>
  </div>
  <section>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Наименование</th>
        <th>Роль</th>
        <th>Тип проекта</th>
        <th>Премирование</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>1</td>
        <td>«Творческие люди» (Приморский край)</td>
        <td>Руководитель проекта</td>
        <td>Региональный проект</td>
        <td>
          <span class="badge green white-text">Подлежит</span>
        </td>
        <td>
          <button class="btn-small btn blue">
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>«Творческие люди» (Приморский край)</td>
        <td>Руководитель проекта</td>
        <td>Региональный проект</td>
        <td>
          <span class="badge green white-text">Подлежит</span>
        </td>
        <td>
          <button class="btn-small btn blue">
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</div>
    
</template>


<style>
.badge{
    border-radius: 8px;
}

.btn-small{
    border-radius: 8px;
}

</style>