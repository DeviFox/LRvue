<template>

  <ul class="sidenav app-sidenav open">
      <div class="side">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact">
      <a href="#" class="medium material-icons waves-effect waves pointer center">
        {{link.title}}
      </a>
    </router-link>
     </div>
  </ul>
 
</template>

<script>
export default {
  data: () => ({
    links: [
      
      { title: "assignment_ind", url: "/Personal" },
      { title: "assignment", url: "/History", exact: true},
      { title: "collections_bookmark", url: "/Projects"},
    ],
  }),
};
</script>
<style>
.side a{
    display: grid;
    height: 60px;
    align-items: center;
    
}

</style>