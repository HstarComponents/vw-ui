<template>
  <div class="page page-button button">
    <div class="page__hd">
      <h1 class="page__title">Button</h1>
      <p class="page__desc">按钮</p>
    </div>
    <div class="page__bd page__bd_spacing">
      <vw-button type="primary">页面主操作 Normal</vw-button>
      <vw-button type="primary" :loading="true">页面主操作 Loading</vw-button>
      <vw-button type="primary" :disabled="true">页面主操作 Disabled</vw-button>
      <vw-button>页面次要操作 Normal</vw-button>
      <vw-button :loading="true">页面次操作 Loading</vw-button>
      <vw-button :disabled="true">页面次要操作 Disabled</vw-button>
      <vw-button type="warn">警告类操作 Normal</vw-button>
      <vw-button type="warn" :loading="true">警告类操作 Loading</vw-button>
      <vw-button type="warn" :disabled="true">警告类操作 Disabled</vw-button>
      <div class="button-sp-area">
        <vw-button plain>按钮</vw-button>
        <vw-button plain disabled>按钮</vw-button>
        <vw-button type="primary" plain>按钮</vw-button>
        <vw-button type="primary" plain disabled>按钮</vw-button>
        <vw-button type="primary" mini>按钮</vw-button>
        <vw-button mini>按钮</vw-button>
        <vw-button type="warn" mini>按钮</vw-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {};

</script>
