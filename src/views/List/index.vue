<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Disease</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div style="margin-bottom: 1vh;">
        <ion-item v-for="data in memories"
                  button
                  class="ion-padding"
                  @click="() => $router.push(`/add_disease_details/${data.id}`)">
          <ion-thumbnail slot="start">
            <ion-img :src="data.image"/>
          </ion-thumbnail>
          <ion-label>{{ data.title }}</ion-label>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';

export default {
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
  computed: {
    memories() {
      return this.$store.getters.memories;
    }
  }
}
</script>