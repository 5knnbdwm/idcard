<template>
  <div id="main">
    <div class="row">
      <div class="column column-50 column-offset-25">
        <h3>
          <img :src="icon">
          IDcard generator</h3>
        <div>
          <label for="person-type">Type</label>
          <select id="person-type" v-model="person.type">
            <option value="0" disabled selected>---</option>
            <option value="1">Faculty</option>
            <option value="2">Staff</option>
            <option value="3">Admin</option>
            <option value="4">Parent</option>
            <option value="5">Student</option>
            <option value="6">Alumni</option>
            <option value="7">Caregiver</option><!-- has three options -->
            <option value="8">Outsource</option><!-- has three options -->
            <option value="9">Partners</option>
          </select>
        </div>
        <div v-if="person.type">
          <label for="name">Name</label>
          <input type="text" placeholder="Samuel" id="name" v-model="person.name" @change="capitalizeFirstLetter">
          <label for="surname">Surname</label>
          <input type="text" placeholder="CJ Patoilo" id="surname" v-model="person.surname" @change="capitalize">
        </div>
        <div v-if="person.type == 1 || person.type == 2 || person.type == 3 || person.type == 5">
          <label for="idfield">ID</label>
          <input type="number" placeholder="CJ Patoilo" id="idfield" min="00000" max="99999" v-model="person.id">
        </div>
        <div v-if="person.type == 1 || person.type == 2 || person.type == 3">
          <label for="title">Title</label>
          <input type="text" placeholder="CJ Patoilo" id="title" v-model="person.title">
        </div>
        <div v-if="person.type == 5">
          <label for="class">Class</label>
          <input type="number" placeholder="CJ Patoilo" id="class" min="2000" max="2099" v-model="person.class">
        </div>
        <div v-if="person.type == 7 || person.type == 8">
          <label for="year">Year</label>
          <select id="year" v-model="person.year">
            <option value="0" disabled selected>---</option>
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
          </select>
        </div>
        <div v-if="person.type">
          <label for="photo">Photo</label>
          <input type="file" id="photo" @change="onFileChange">
        </div>
        <div v-if="person.type == 5">
          <hr>
          <label for="photo">File</label>
          <input type="file" id="photo" @change="onFileChange">
        </div>
        <!-- <button v-if="btn" type="button" v-on:click="createCanvas()">Create ID-card</button> -->
        <button type="button" v-on:click="createCanvas()">Create ID-card</button>
        <hr>
        <canvas id="canvas" width="1016" height="638"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '@/assets/icon.png';
import his_logo_dark_blue from '@/assets/his_logo_dark_blue.png';
import his_seal_2017 from '@/assets/his_seal_2017.png';
import Faculty from '@/assets/Faculty.png';
import Staff from '@/assets/Staff.png';
import Admin from '@/assets/Admin.png';
import Parent from '@/assets/Parent.png';
import Student from '@/assets/Student.png';
import Alumni from '@/assets/Alumni.png';
import Caregiver from '@/assets/Caregiver.png';
import Outsource from '@/assets/Outsource.png';
import Partners from '@/assets/Partners.png';

export default {
  name: 'Main',
  data () {
    return {
      icon,
      his_logo_dark_blue,
      his_seal_2017,
      Faculty,
      Staff,
      Admin,
      Parent,
      Student,
      Alumni,
      Caregiver,
      Outsource,
      Partners,
      btn: false,
      canvas: '',
      person: {
        type: '',
        name: '',
        surname: '',
        id: '',
        title: '',
        class: '',
        year: '',
        photo: '',
      },
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();

      reader.onload = (e) => {
        this.person.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    capitalizeFirstLetter() {
      this.person.name = this.person.name.charAt(0).toUpperCase() + this.person.name.slice(1);
      console.log(this.person.name);
    },
    capitalize() {
      this.person.surname = this.person.surname.toUpperCase();
      console.log(this.person.surname);
    },
    create() {
      var ctx = document.getElementById("canvas").getContext("2d");

      // adding the Title background
      ctx.fillStyle = '#13284B';
      ctx.fillRect(0, 0, 126, 638);

      // adding the right side background
      ctx.fillStyle = '#e0efe5';
      ctx.fillRect(551, 0, 465, 638);

      // adding the Titel, left side
      var title = new Image();
      title.onload = function () {
        ctx.drawImage(title, 0, 0, 1016, 638);
      };
      title.src = this.Admin;
    },
    createCanvas() {
      // getElementById("canvas") = '';
      var ctx = document.getElementById("canvas").getContext("2d");

      // adding the Title background
      if(this.person.type == 1) {
        ctx.fillStyle = '#13284B';
      };
      if(this.person.type == 2) {
        ctx.fillStyle = '#13284B';
      };
      if(this.person.type == 3) {
        ctx.fillStyle = '#13284B';
      };
      if(this.person.type == 4) {
        ctx.fillStyle = '#A4C8E1';
      };
      if(this.person.type == 5) {
        ctx.fillStyle = '#F6BE00';
      };
      if(this.person.type == 6) {
        ctx.fillStyle = '#8600BF';
      };
      if(this.person.type == 7) {
        if(this.person.year == 1) {
          ctx.fillStyle = '#40E0D0';
        };
        if(this.person.year == 2) {
          ctx.fillStyle = '#F200C2';
        };
        if(this.person.year == 3) {
          ctx.fillStyle = '#FF6600';
        };
      };
      if(this.person.type == 8) {
        if(this.person.year == 1) {
          ctx.fillStyle = '#B7B093';
        };
        if(this.person.year == 2) {
          ctx.fillStyle = '#FFFF00';
        };
        if(this.person.year == 3) {
          ctx.fillStyle = '#00EE00';
        };
      };
      if(this.person.type == 9) {
        ctx.fillStyle = '#661805';
      };
      ctx.fillRect(0, 0, 126, 638);

      // adding the right side background
      ctx.fillStyle = '#e0efe5';
      ctx.fillRect(551, 0, 465, 638);

      // adding the Titel, left side
      var title = new Image();
      title.onload = function () {
        ctx.drawImage(title, 0, 0, 1016, 638);
      };
      if(this.person.type == 1) {
        title.src = this.Faculty;
      };
      if(this.person.type == 2) {
        title.src = this.Staff;
      };
      if(this.person.type == 3) {
        title.src = this.Admin;
      };
      if(this.person.type == 4) {
        title.src = this.Parent;
      };
      if(this.person.type == 5) {
        title.src = this.Student;
      };
      if(this.person.type == 6) {
        title.src = this.Alumni;
      };
      if(this.person.type == 7) {
        title.src = this.Caregiver;
      };
      if(this.person.type == 8) {
        title.src = this.Outsource;
      };
      if(this.person.type == 9) {
        title.src = this.Partners;
      };

      // adding the Name
      ctx.font = 'bold 38pt Lucida Grande';
      ctx.fillStyle = 'Black';
      ctx.fillText(this.person.surname, 570, 220);
      ctx.fillText(this.person.name, 570, 270);

      // adding additional information
      ctx.font = 'normal 38pt Lucida Grande';
      ctx.fillStyle = 'Black';
      if(this.person.type == 1) {
        ctx.fillText(this.person.title, 570, 320);
      };
      if(this.person.type == 2) {
        ctx.fillText(this.person.title, 570, 320);
      };
      if(this.person.type == 3) {
        ctx.fillText(this.person.title, 570, 320);
      };

      // adding the HIS seal
      var his_logo = new Image();
      his_logo.onload = function () {
        ctx.drawImage(his_logo, 617, 400, 332, 123);
      };
      his_logo.src = this.his_logo_dark_blue;

      // adding the photo
      var photo = new Image()
      photo.onload = function () {
        var x2 = photo.height/638*425;
        var x3 = (photo.width - x2)/2;
        ctx.drawImage(photo , x3, 0, x2, photo.height, 126, 0, 425, 638);
      };
      photo.src = this.person.photo;

      //  creating the stamp within
      var his_seal = new Image();
      photo.onload = function () {
        ctx.globalAlpha = 0.09;
        ctx.drawImage(his_seal, 440, -10, 500, 500);
      };
      his_seal.src = this.his_seal_2017;
    }
  },
}
</script>

<style scoped>

</style>
