<template>
  <div class="form">
    <div class="title">Traffic Runners, LLC</div>
    <div class="subtitle">Softwear company</div>

    <div class="tabs-wrapper">
      <Tabs
        :tabs="tabs"
        :selectedTabId="selectedTabId"
        @click="selectTab"
      />
    </div>

    <div class="input">
      <div class="lable">Link to the button</div>
      <div class="input-field-wrapper">
        <InputField v-model="inputText"/>
      </div>
      <div class="describe">
        You can use any link, but it’s length should not exceed
        200 characters
      </div>
    </div>

    <div class="button-default-wrapper">
      <button-default>Continue</button-default>
    </div>

    <div class="meta-disabled">
      <input v-model="alertDisabled" type="checkbox">
      <div @click="toogleAlert">
        alertDisabled

        {
        id: 3,
        name: 'Alert',
        icon: 'IconAlert',
        disabled: this.alertDisabled,
        }
      </div>
    </div>

    <div class="meta-removed">
      <input v-model="alertRemoved" type="checkbox">
      <div @click="alertRemoved = !alertRemoved">
        alertRemoved
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/ui/Tabs';
import InputField from '@/components/ui/InputField';
import ButtonDefault from '@/components/ui/ButtonDefault';

export default {
  components: {
    Tabs,
    InputField,
    ButtonDefault,
  },
  data() {
    return {
      inputText: '',
      selectedTabId: 1,
      alertDisabled: true,
      alertRemoved: false,
    };
  },
  computed: {
    tabs() {
      const tabItems = [
        {
          id: 1,
          name: 'Standard',
          icon: 'IconFile',
          disabled: false,
        },
        {
          id: 2,
          name: 'Event',
          icon: 'IconCalendar',
          disabled: false,
        },
        {
          id: 3,
          name: 'Alert',
          icon: 'IconAlert',
          disabled: this.alertDisabled,
        },
      ];

      return this.alertRemoved ? tabItems.slice(0, 2) : tabItems;
    },
  },
  watch: {
    alertDisabled: function(newVal) {
      if (this.selectedTabId === 3 && newVal) {
        this.selectedTabId = 1;
      }
    },
    alertRemoved: function(newVal) {
      if (this.selectedTabId === 3 && newVal) {
        this.selectedTabId = 1;
      }
    },
  },
  methods: {
    selectTab(id) {
      this.selectedTabId = id;
    },
    toogleAlert() {
      this.alertDisabled = !this.alertDisabled;
    },
  },
};
</script>

<style lang="scss" scoped>
  .form {
    width: 512pt;
    height: 480pt;
    padding: 36pt 0;
    border-radius: 4pt;
    background-color: $white;
    box-shadow: $box-shadow;

    .title {
      @extend .text-title;
      padding: 0 $form-base-padding;
    }

    .subtitle {
      @extend .text-subtitle;
      margin-top: 2pt;
      padding: 0 $form-base-padding;
      color: $gray-1;
    }

    .tabs-wrapper {
      margin-top: 26pt;
      padding: 0 32pt;
    }

    .input {
      margin-top: 33pt;
      padding: 0 $form-base-padding;

      .lable {
        @extend .text-subtitle;
        color: $gray-1;
      }

      .input-field-wrapper {
        margin-top: 5pt;
      }

      .describe {
        @extend .text-regular;
        margin-top: 23pt;
      }
    }

    .button-default-wrapper {
      padding: 0 $form-base-padding;
      margin-top: 17pt;
    }

    .meta-disabled, .meta-removed {
      display: flex;
      align-items: center;
      padding: 0 $form-base-padding;
      font-size: 10pt;
      cursor: pointer;

      div {
        color: $gray-1;
        margin-left: 5pt;
      }
    }

    .meta-disabled {
      margin-top: 20pt;
    }

    .meta-removed {
      margin-top: 1pt;
    }
  }
</style>
