class EventHub {
  subMap: Map<string, any[]>;
  cachedEvents: Map<string, any[]>;

  private static instance: EventHub | undefined;

  constructor() {
    this.subMap = new Map<string, any[]>();
    // 当先发布事件时，可以把要发布的内容先缓存起来
    this.cachedEvents = new Map<string, any[]>();
  }

  // 实现单例
  public static getInstance(): EventHub {
    console.log('获取实例：', EventHub.instance);
    if (!EventHub.instance) {
      EventHub.instance = new EventHub();
    }

    return EventHub.instance;
  }

  // 监听事件
  on(key: string, fn: any) {
    // 监听事件前先去缓存中查询是否有未触发的事件。
    const cachedRes = this.cachedEvents.get(key);

    if (cachedRes) {
      console.log('有缓存事件：', cachedRes);
      fn(...cachedRes);
    } else {
      // 不存在则插入订阅列表
      const events = this.subMap.get(key) || [];
      events.push(fn);
      this.subMap.set(key, events);
    }
  }

  // 发送事件
  emit(key: string, ...args: any[]) {
    const events = this.subMap.get(key) || [];
    console.log(events);
    if (events.length) {
      events.forEach((fn) => {
        fn(...args);
      });
    } else {
      console.log('先发布事件---');
      this.cachedEvents.set(key, args);
    }
  }

  off(key: string, fn: any) {
    this.cachedEvents.delete(key);

    const sub = this.subMap.get(key);
    if (sub) {
      const index = sub.indexOf(fn);
      if (index >= 0) {
        sub.splice(index, 1);
      }
    }
  }
}

export default EventHub;
