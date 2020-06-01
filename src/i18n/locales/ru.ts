/**
 * Русская локаль
 */
const locale = {
  common: {
    downloadData: 'Загрузить данные',
    open: 'Открыть',
    hide: 'Свернуть',
    save: 'Сохранить',
    create: 'Создать',
    cancel: 'Отменить',
    change: 'Изменить',
    choose: 'Выбрать',
    close: 'Закрыть',
    add: 'Добавить',
    edit: 'Редактировать',
    status: 'Статус',
    optionalField: 'не обязательное для заполнения',
    back: 'Назад',
    noOptionsText: 'Список пуст',
  },
  quartilegram: {
    quartilegram: 'Квартирограмма',
    managementCompany: 'Управляющая компания',
    devices: 'Устройства',
    titleCompany: 'Название квартирограммы',
    titleCompanyPlaceholder: 'Введите название квартирограммы',
    selectManagementCompanyShort: 'Выберите компанию',
    selectManagementCompany: 'Выберите управляющую компанию',
    modalTitle: 'Вы действительно хотите изменить управляющую компанию?',
    modalAddTitle: 'Выберите управляющую компанию из списка',
    modalDescription: 'Выполнив это действие, вы потеряете все данные указанные в квартирограмме',
    onSavingSuccess: 'Данные успешно сохранены!',
    onSavingErr: 'Ошибка при сохранении!',
    getQuartilegramErr: 'Ошибка загрузки квартирограммы!',
  },
  address: {
    address: 'Адрес',
    street: 'Улица',
    homeNumber: '№ дома',
    flatNumber: '№ квартиры',
    region: 'Область',
    city: 'Город',
    regionalAffiliate: 'РФ',
    macroRegionalAffiliate: 'МРФ',
    idORPON: 'ОРПОН',
    fias: 'ФИАС',
    entrances: 'Подъезд',
    addEntrances: 'Добавить подъезд',
    deleteEntrance: 'Удалить подъезд',
    disableDeleteEntrance: 'Удаление подъезда недоступно',
    addFlat: 'Добавить квартиру',
    deleteFlat: 'Вы действительно хотите удалить квартиру',
    timezone: 'Часовой пояс',
    fiasIdErr: 'ФИАС номер не соответствует формату UUID',
    cirilicErr: 'Некорректный формат. Поле должно содержать кириллический набор',
    readOnly: 'Редактирование доступно только для',
    readOnlyFlat: 'Данная квартира \n принадлежит управляющей компании',
    selectRegion: 'Выберите область',
    selectCity: 'Выберите город',
    startSipPhoneId: 'Начальный SIP ID',
    rangeOfApartments: 'Диапазон квартир',
    createTable: 'Создать таблицу',
    chooseManagmentCompany: 'Выберите управляющую компанию',
    rangeOfApartmentsInfo:
      'Укажите диапазон квартир с помощью дефиса или через запятую. Например: 1-10, 12',
  },
  device: {
    domofon: 'Домофон',
    barrier: 'Шлагбаум',
    deviceName: 'Название устройства',
    deviceModel: 'Модель утройства',
    deviceSn: 'SN устройства',
    deviceIp: 'IP',
    deviceMacAdress: 'MAC-адрес',
    bindDevice: 'Привязать устройство',
    house: 'Дом',
    entrance: 'Подъезд',
    floor: 'Этаж',
    flat: 'Квартира',
    area: 'Площадь',
    checkStatus: 'Дата последней проверки',
    noHasCheckStatus: 'Устройство на связь не выходило',
    addBarrier: 'Добавить шлагбаум',
    deleteBarrier: 'Удалить шлагбаум',
    addDomofon: 'Добавить домофон',
    deleteDomofon: 'Удалить домофон',
    emptyDeviceList: 'Привязанные устройства отсутствуют на данном элементе квартирограммы',
    readOnlyIntercom: 'Данный домофон \n принадлежит управляющей компании',
    readOnlyBarrier: 'Данный шлагбаум \n принадлежит управляющей компании',
    hostErr: 'Некорректный формат Host-адреса',
    macErr: 'Некорректный формат MAC-адреса',
  },
  sipPhone: {
    sipPhone: 'SIP-трубки',
    flatNumber: 'Номер квартиры',
    sipId: 'SIP ID',
    sipPhoneId: 'SIP ID трубки',
    addSipPhone: 'Добавить Sip-трубку',
  },
};

export default locale;
