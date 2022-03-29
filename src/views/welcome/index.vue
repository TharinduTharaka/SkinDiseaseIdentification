<template>
  <ion-page>
    <ion-content>
      <div>
        <ion-img class="ion-padding" src="assets/images/How-To-Get-Glowing-Skin-Naturally-In-A-Week.jpg"/>
      </div>
      <div class=" ion-text-center padding-header">
        <h2>Welcome</h2>
      </div>
      <div>
        <div  style="height: 50px;">
          <ion-row>
            <ion-col>
              <ion-button
                  expand="block"
                  style="height: 50px;"
                  @click="() => $router.push(`/tabs/list`)">
                LOGIN
              </ion-button>
            </ion-col>
          </ion-row>
        </div>
        <br/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonText,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCol,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import {defineComponent} from 'vue';

import {calendarOutline} from 'ionicons/icons';

export default {
  name: 'Login',
  components: {
    IonText,
    IonIcon,
    IonThumbnail,
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonToolbar,
    IonFooter,
    IonButton,
    IonItem,
    IonInput,
    IonLabel,
    IonCol,
    IonRow,
    IonPage,

  },
  data() {
    return {
      calendarOutline,


    };
  },
};
</script>

<style scoped>


.auth-form ion-grid,
.auth-form ion-row {
  height: 100%;
  justify-content: center;
}

.already {
  display: block;
  text-align: center;
  padding-bottom: 10px;
}

.lorem-header{
  padding-top: 5px;
  margin-left: 30px;
  margin-right: 30px;
}


.padding-header{
  padding-top: 15px;
  margin-left: 30px;
  margin-right: 30px;
}

ion-button {
  height: 5vh;
  margin-top: 5px;
  margin-left: 40px;
  margin-right: 40px;
}
</style>
