<template>
  <div class="app-main-layout">

    <Navbar/>
    <Sidebar/>

<div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>



    <main class="app-content white">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue modal-trigger" href="#modal1">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
export default {
  name: "main-layout",
  components: {
    Navbar,
    Sidebar,
  },
  mounted(){
    M.Modal.init()

  }

};



</script>




<style>
.app-sidenav {
  padding-top: 0px !important;
  width: 60px !important;
}

.sidenav li > a {
  padding: 0 0px !important;
}

.app-content {
  padding-left: 80px !important;
  padding-top: 0px !important;
}

.app-page {
  padding: 10px !important;
}

.navbar {
  padding: 0 18px !important;
  border: none !important;
  position: unset !important;
}

@font-face {
  font-family: "Raleway";

  src: url("../fonts/Raleway-Regular.ttf");
}

.app-main-layout {
  font-family: "Raleway";
}
</style>