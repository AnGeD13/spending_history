export const TRANSACTION_TYPES = [
  {type: "autoUp", label: "Поднятие"},
  {type: "viewing", label: "Оплата за просмотр"},
  {type: "stick", label: "Прикрепление"},
  {type: "replenishing", label: "Пополнение"},
  {type: "commission", label: "Комиссия за сделку"},
]

export const ALL_MONTHS = [
  "января", "февраля", "марта", "апреля",
  "мая", "июня", "июля", "августа", 
  "сентября", "октября", "ноября", "декабря"];

export const INITIAL_PAGE = 1;
export const INITIAL_MIN_SUM = 0;
export const INITIAL_MAX_SUM = null;
export const INITIAL_FIRST_DATE = null;
export const INITIAL_LAST_DATE = null;
export const ITEMS_PER_PAGE = 30;
export const DAY_IN_MS = 86400000;