Компоненты React могут получить состояние, устанавливая this.state в конструкторе.

Сперва добавим конструктор к классу, чтобы инициализировать состояние:
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  В JavaScript-классах вам всегда нужно вызывать super при объявлении конструктора подкласса. Все классовые React-компоненты, у которых есть constructor, должны начинаться с вызова super(props).

  