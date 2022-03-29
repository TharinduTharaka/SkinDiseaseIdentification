<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="`/list`"></ion-back-button>
        </ion-buttons>
        <ion-title>{{loadedMemory.title}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div>
        <ion-img class="ion-padding"  :src="loadedMemory.image"></ion-img>
      </div>
      <h2 class="ion-text-center">{{loadedMemory.title}}</h2>
      <p class="ion-text-center">{{loadedMemory.description}}</p>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonButtons, IonBackButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/vue';

export default {
  components: {
    IonButtons,IonBackButton,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data() {
    return {
      memoryId: this.$route.params.id,
    }
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    }
  }
}
</script>

<style scoped>

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>