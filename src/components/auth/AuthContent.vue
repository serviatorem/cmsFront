<script setup lang="ts">

const props = defineProps<{
    title: string,
    type: string
}>();
if (props.type === 'auth'){
    console.log('aboba');
}
</script>

<template>
    <div class="auth">
        <h2 class="auth__title">
            {{ title }}
        </h2>
        <div class="auth__form">
            <label class="auth__label">
                <span>Логин</span>
                <input type="text" class="auth__input auth__login">
            </label>
            <label class="auth__label">
                <span>Пароль</span>
                <input type="password" class="auth__input auth__password">
            </label>
            <div
                    class="auth__footer"
                    :class="{reg:type === 'reg'}"
            >
                <RouterLink
                        to="registration"
                        class="auth__link"
                        v-if="type === 'auth'"
                >Зарегистрироваться</RouterLink>
                <input class="auth__input auth__submit" type="submit">
            </div>
        </div>


    </div>
</template>

<style scoped lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70vh;
  align-items: center;
  justify-content: center;
  gap: 20px 0;

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: $base-color;
  }

  &__form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    justify-items: center;
  }

  &__label {
    display: grid;
    max-width: 320px;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 17px;
    color: #25213B;
  }

  &__input {
    background: white;
    border-radius: 6px;
    border: none;
    outline: none;
    padding: 10px;
  }
  &__submit{
    justify-self: right;
  }
  &__footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}
.reg{
  flex-direction: row-reverse;
}
</style>