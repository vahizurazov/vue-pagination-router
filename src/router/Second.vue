<template>
  <div id="books">
    <h1>{{ title }}</h1>
    <h4>{{ author }}</h4>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Second",
  data() {
    return {
      title: "MK Sega",
      author: "Shao Kahn",
      text:
        "Шао Кан — вымышленный персонаж, один из первых боссов серии файтинг-игр Mortal Kombat. В новых частях серии он периодически становится доступен в качестве обычного игрового персонажа."
    };
  }
};
</script>

