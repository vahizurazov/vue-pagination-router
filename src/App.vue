<template>
  <div id="app">
    <ul class="filters">
      <li>
        <router-link to="/first">First</router-link>
      </li>
      <li>
        <router-link to="/second">Second</router-link>
      </li>
      <li>
        <router-link to="/third">Third</router-link>
      </li>
    </ul>

    <router-view></router-view>

    <!-- <Tasktest>Tasktest 1</Tasktest>
    <Tasktest>Tasktest 2</Tasktest>
    <Tasktest>Tasktest 3</Tasktest>
    <Tasktest>Tasktest 4</Tasktest>-->
    <div class="reverse">
      <h1>{{ text }}</h1>
      <button v-on:click="reverFn" class="btn btn-outline-success">{{ text }}</button>
    </div>
    <div class="lodashTest">
      <ul class="list-group">
        <li v-for="item in collection" v-bind:key class="list-group-item">{{item}}</li>
      </ul>
      <div class="btn-toolbar">
        <div class="btn-group">
          <button
            class="btn btn-success"
            v-for="p in pagination.pages"
            @click.prevent="setPage(p)"
          >{{ p }}</button>
        </div>
      </div>
      <p>Displaying from indexes {{ pagination.startIndex }} to {{ pagination.endIndex }}</p>
    </div>
  </div>
</template>

<script>
import Tasktest from "./components/Tasktest";

export default {
  name: "app",
  components: {
    Tasktest
  },
  data() {
    return {
      text: "Reverse text!",
      data: [
        "Segoe UI",
        "Roboto",
        "харе",
        "Helvetica Neue",
        "Arial",
        "кришна",
        "Noto Sans",
        "харе",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "кришна",
        "Segoe UI Symbol",
        "Noto Color Emoji",
        "кришна",
        "харе",
        "харе",
        "кришна",
        "8-()"
      ],
      perPage: 3,
      pagination: {}
    };
  },
  computed: {
    collection() {
      return this.paginate(this.data);
    }
  },
  methods: {
    reverFn() {
      this.text = this.text
        .split("")
        .reverse()
        .join("");
    },
    setPage(p) {
      this.pagination = this.paginator(this.data.length, p);
    },
    paginate(data) {
      return _.slice(
        data,
        this.pagination.startIndex,
        this.pagination.endIndex + 1
      );
    },
    paginator(totalItems, currentPage) {
      var startIndex = (currentPage - 1) * this.perPage,
        endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
      return {
        currentPage: currentPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
      };
    }
  },
  created() {
    this.setPage(1);
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  text-align: center;
}

.filters {
  margin: 0;
  padding: 30px;
  list-style: none;
}

.filters li {
  display: inline;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.router-link-active {
  border-color: rgba(175, 47, 47, 0.2);
}
</style>
