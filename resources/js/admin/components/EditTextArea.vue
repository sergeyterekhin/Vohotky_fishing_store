<template>
  <div class="row">
    <form class="col s12" @submit.prevent="submit">
      <div class="card">
        <div class="card-content center">
          <span class="card-title">{{ this.DataPage.name }}</span>
        </div>
        <div class="card-action center">
          <p>Вспомогательные кнопки</p>
          <button
            @click.prevent="fastButtons(1)"
            class="tooltipped waves-effect light-blue darken-3 btn-small"
            data-tooltip="< h1 >Тут нужно писать ваш заголовок< /h1 >"
          >
            Главный заголовок
          </button>
          <button
          @click.prevent="fastButtons(2)"
            class="tooltipped waves-effect light-blue darken-3 btn-small"
            data-tooltip="< h2 >Тут нужно писать ваш заголовок< /h2 >"
          >
            Дочерний заголовок
          </button>
          <button
          @click.prevent="fastButtons(3)"
            class="tooltipped waves-effect light-blue darken-3 btn-small"
            data-tooltip="< br >"
          >
            Новая строка
          </button>
          <button 
          @click.prevent="fastButtons(4)"
          class="tooltipped waves-effect light-blue darken-3 btn-small"
          data-tooltip="< p >Здесь ваше предложение< /p >"
          >
            Новое предложение
          </button>
          <button 
          @click.prevent="fastButtons(5)"
          class="tooltipped waves-effect light-blue darken-3 btn-small"
          data-tooltip="Слово будет <strong>таким</strong>"
          >
            Жирный текст
          </button>
        </div>
        <div class="card-action">
          <textarea
            id="textarea1"
            class="materialize-textarea"
            v-model="DataPage.content"
            style="height: 500px"
          ></textarea>
          <label for="textarea1">Содержимое страницы</label>
        </div>
        <div class="card-action">
          <input
            type="submit"
            class="waves-effect light-blue darken-3 btn-large"
            value="Cохранить"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["CHeader", "DataPage"],
  methods: {
    submit() {
      this.$emit("CSaves");
    },

    fastButtons(id) {
      switch (id) {
        case 1: this.insertTextAtCursor(document.getElementById('textarea1'),'<h1></h1>'); break;
        case 2: this.insertTextAtCursor(document.getElementById('textarea1'),'<h2></h2>'); break;
        case 3: this.insertTextAtCursor(document.getElementById('textarea1'),'<br>'); break;
        case 4: this.insertTextAtCursor(document.getElementById('textarea1'),'<p></p>'); break;
        case 5: this.insertTextAtCursor(document.getElementById('textarea1'),'<strong></strong>'); break;
      
        default:
          break;
      }
    },
//вынести в скрипты=======================
    insertTextAtCursor(el, text, offset) {
      var val = el.value,
        endIndex,
        range,
        doc = el.ownerDocument;
      if (
        typeof el.selectionStart == "number" &&
        typeof el.selectionEnd == "number"
      ) {
        endIndex = el.selectionEnd;
        el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
        el.selectionStart = el.selectionEnd =
          endIndex + text.length + (offset ? offset : 0);
      } else if (doc.selection != "undefined" && doc.selection.createRange) {
        el.focus();
        range = doc.selection.createRange();
        range.collapse(false);
        range.text = text;
        range.select();
      }
    },
//======================================
  },
  mounted() {
    M.Tooltip.init(document.querySelectorAll(".tooltipped"));
  },
};
</script>