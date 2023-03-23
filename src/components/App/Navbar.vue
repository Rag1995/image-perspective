<script setup lang="ts">
import MdiGithub from '~icons/mdi/github'
</script>

<template>
  <nav class="navbar bg-dark-subtle text-body">
    <div class="container-fluid">
      <div class="navbar-brand fw-bolder">
        差分透鏡
      </div>

      <ul class="navbar-nav">
        <li class="nav-item">
          <DarkToggler />
        </li>
        <li class="nav-item">
          <BaseNavLink href="https://github.com/Rag1995/image-perspective" target="_blank">
            <template #prefix-icon>
              <MdiGithub />
            </template>
            Github
          </BaseNavLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.navbar {
  flex-flow: row nowrap;

  &-brand {
    user-select: none;
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
    font-family: "Noto Sans TC Heavy" !important;
  }

  &-nav {
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
