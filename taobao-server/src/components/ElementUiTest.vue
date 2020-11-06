<template>
  <div class="ElementUiTest">
    <h2>el ui</h2>
    <el-row>
      <el-col :span="10"><div class="box">10</div></el-col>
      <el-col :span="10"><div class="box1">10</div></el-col>
      <el-col :span="5"><div class="box2">4</div></el-col>
    </el-row>

    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">
        <el-row>
          <el-col :span="24">
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
            <el-button plain>朴素按钮</el-button>
            <el-button type="primary" plain>主要按钮</el-button>
            <el-button type="success" plain>成功按钮</el-button>
            <el-button type="info" plain>信息按钮</el-button>
            <el-button type="warning" plain>警告按钮</el-button>
            <el-button type="danger" plain>危险按钮</el-button>

            <el-button round>圆角按钮</el-button>
            <el-button type="primary" round>主要按钮</el-button>
            <el-button type="success" round>成功按钮</el-button>
            <el-button type="info" round>信息按钮</el-button>
            <el-button type="warning" round>警告按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>

            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-s-goods" circle></el-button>
            <el-button
              type="warning"
              icon="el-icon-star-off"
              circle
              disabled
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              disabled
            ></el-button>
          </el-col>
        </el-row>
      </el-main>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
    <br /><br />
    <!-- <el-container>
      <el-aside width="200px" class="aside">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container> -->

    <el-link icon="el-icon-edit">编辑</el-link>
    <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
  </div>
</template>

<script>
export default {
  name: "ElementUiTest",
  props: {
    msg: String,
  },
};
</script>

<style scoped >
.box {
  background: blue;
  color: #fff;
}
.box1 {
  background: red;
  color: #fff;
}
.box2 {
  background: yellow;
  color: #fff;
}
.header {
  background: gray;
}
.main {
  background: yellow;
}
.footer {
  background: orange;
}
.aside {
  background: green;
}
</style>
