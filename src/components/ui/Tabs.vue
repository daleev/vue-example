<template>
  <div class="tabs-component">
    <div class="tab-item"
      v-for="tab in tabs"
      :key="tab.id"
      :class="{ 'active': tab.id === selectedTabId, 'disabled': tab.disabled }"
      @click="!tab.disabled && $emit('click', tab.id)"
    >
      <component :is="tab.icon" class="icon"/>
      <div class="name">{{ tab.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    IconFile: () => import('@/components/ui/icons/IconFile.vue'),
    IconCalendar: () => import('@/components/ui/icons/IconCalendar.vue'),
    IconAlert: () => import('@/components/ui/icons/IconAlert.vue'),
  },
  props: {
    tabs: Array,
    selectedTabId: [String, Number],
  },
};
</script>

<style lang="scss" scoped>
  .tabs-component {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tab-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40pt;
      margin-right: 2pt;
      background-color: $gray-3;
      color: $gray-2;
      cursor: pointer;
      user-select: none;
      transition: opacity 0.3s ease, background-color 0.3s ease;

      &:first-child {
        border-radius: 24pt 0 0 24pt;
      }

      &:last-child {
        margin-right: 0;
        border-radius:  0 24pt 24pt 0;
      }

      &:hover {
        opacity: 0.9;
        transition: opacity 0.3s ease;
      }

      .icon {
        display: block;
        margin-right: 8pt;
      }

      .name {
        @extend .text-action;
      }
    }

    .active {
      background-color: $blue;
      color: white;
      transition: background-color 0.3s ease;
    }

    .disabled {
      color: $gray-4;
      cursor: not-allowed;
    }
  }
</style>
