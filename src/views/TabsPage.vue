<template>
  <ion-page>
    <ion-tabs  @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/list">
          <ion-icon :icon="list" />
          <ion-label>List</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/add_disease">
          <ion-icon :icon="camera" />
          <ion-label>Find Disease</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { camera,list, } from 'ionicons/icons';

export default {
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    const beforeTabChange = () => {

    }
    const afterTabChange = () => {
      // this.$router.go(-1);
    }
    return {
      camera,beforeTabChange,afterTabChange,
      list,
    }
  }
}
</script>