<template>
  <div class="sidebar_item" v-if="item.children">
    <!-- 如果该条item没有子元素 -->
    <router-link v-if="hasOnlyOneChild(item.children)" :to="children[0].path">
      <el-menu-item :index="children[0].path" class="submenu_title_noDropdown">
        <i :class="'el-icon-'+children[0].meta.icon"></i>
        <span slot="title">{{ children[0].name }}</span>
      </el-menu-item>
    </router-link>

    <!-- 该条 item 有二级菜单 -->
    <el-submenu :index="item.meta.title" v-else> <!--注意这里的index如果写固定会导致左侧多个多级子菜单的一个bug-->
      <template slot="title">
        <i class="el-icon-document"></i>
        <span @click="handleMulItemFir(children)">{{ item.meta.title }}</span>
      </template>
      <el-menu-item v-for="(mulItem,index) in children" :key="mulItem+index" :index="mulItem.path||mulItem.meta.title">
        <router-link :to="mulItem.path">
          <i :class="'el-icon-'+mulItem.meta.icon"></i>
          <span>{{ mulItem.name }}</span>
        </router-link>
      </el-menu-item>
    </el-submenu>

  </div>
</template>

<script>
export default {
  props: ["item", "collapse"],
  data() {
    return {
      children: null
    };
  },
  methods: {
    hasOnlyOneChild(ic) {
      this.children = ic;
      return ic.length === 1 ? true : false
    },
    handleMulItemFir(c) {
      this.$router.push(c[0].path)
    },
  }
};
</script>

<style lang="scss"> // scoped delete for cancling click menu icon
.el-menu {
  border-right: none !important;
}
</style>
