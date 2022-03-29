<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Add Disease</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-img clearInput value="clear me" :src="previewImage"></ion-img>
            </ion-thumbnail>
            <ion-label position="floating">Enter Title</ion-label>
            <ion-input clearInput value="clear me" v-model="enteredTitle" required type="text"/>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Enter Description</ion-label>
            <ion-input type="text" clearInput value="clear me" v-model="enteredDescription"/>
          </ion-item>
        </ion-list>
        <ion-button v-show="previewImage" expand="block" type="submit">Upload</ion-button>
      </form>

      <ion-fab v-show="!previewImage" slot="fixed" horizontal="center" vertical="bottom">
        <ion-fab-button @click="takePhoto">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTextarea,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import {camera} from 'ionicons/icons';
import {Camera, CameraResultType} from '@capacitor/camera';

export default {
  emits: ['save-memory'],
  components: {
    IonHeader, IonInput, IonLabel, IonTextarea, IonButton,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonFooter,
    IonFab,
    IonFabButton,
    IonIcon, IonList,
    IonImg,
    IonItem, IonThumbnail
  },
  ionViewDidEnter(){
    this.id= '';
    this.enteredTitle= '';
    this.enteredDescription= '';
    this.previewImage= ''
  },
  // mounted() {
  //
  // },
  data() {
    return {
      id: '',
      enteredTitle: '',
      enteredDescription: '',
      previewImage: ''
    }
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    }
  },
  methods: {
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        quality: 60,
        allowEditing: true,
      });

      this.previewImage = photo.webPath;
      console.log(this.previewImage);
    },
    async submitForm() {
      const memoryData = {
        id: new Date().toISOString(),
        title: this.enteredTitle,
        image: this.previewImage,
        description: this.enteredDescription
      };
      console.log(memoryData);
      this.$store.dispatch('addMemory', memoryData);
      await this.$router.push(`/add_disease_details/${memoryData.id}`);
    }
  },
  setup() {
    return {
      camera,
    }
  }
}
</script>