import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 font-['Open_Sans']">
      {/* Email Container */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Header with Logo */}
        <div className="bg-white px-6 py-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">α</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-800">АЛЬФА</div>
              <div className="text-xs text-orange-500 font-medium">СТРАХОВАНИЕ</div>
              <div className="text-xs text-orange-500 font-medium">ЖИЗНИ</div>
            </div>
          </div>
        </div>

        {/* Hero Section with Illustration */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Icon name="Ruble" size={20} className="text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Icon name="DollarSign" size={16} className="text-gray-600" />
                </div>
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Icon name="Plus" size={20} className="text-gray-600" />
              </div>
              <div className="relative">
                <div className="w-16 h-20 bg-gradient-to-b from-blue-200 to-blue-300 rounded-lg">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full opacity-80"></div>
                </div>
                <Icon name="Leaf" size={24} className="absolute -right-2 -bottom-1 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-6">
          <h1 className="text-xl font-bold text-gray-900 mb-6 font-['Inter']">Оплатите взнос по договору страхования</h1>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-4"><strong>(Имя Отчество)</strong>, здравствуйте!</p>
            <p className="text-gray-700 mb-4">
              Напоминаем, что <strong>[Дата ДД.ММ.ГГГГ]</strong> наступает дата оплаты очередного взноса по договору накопительного страхования жизни <strong>[номер договора]</strong>.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-lg font-semibold text-gray-900">
                Сумма взноса: <span className="text-2xl font-bold">[сумма взноса] [валюта]</span>
              </p>
            </div>

            <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02]">
              Перейти к оплате
            </Button>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <p className="text-gray-700 mb-2">
              <strong>Доступные способы оплаты в личном кабинете:</strong> банковская карта или система быстрых платежей (СБП).
            </p>
          </div>

          {/* Online Payment Note */}
          <div className="mb-6">
            <p className="text-gray-700">
              <strong>Если вам не удалось оплатить взнос онлайн</strong>, внесите платеж с помощью банковского перевода по реквизитам в отделении или мобильном приложении банка. Реквизиты компании и банков-партнеров смотрите 
              <a href="#" className="text-blue-600 underline hover:text-blue-800">на сайте</a>.
            </p>
          </div>

          {/* Important Notice */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Обратите внимание!</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>При оплате взноса по договору страхования возможно взимание комиссии.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Если ранее вы меняли условия договора, вносили сумму, превышающую взнос, или делали промежуточные пополнения счета, ваш очередной платеж может отличаться от суммы взноса по договору. Уточните сумму к оплате в личном кабинете или у менеджера.</span>
              </li>
            </ul>
          </div>

          {/* Rating Section */}
          <div className="text-center mb-6">
            <p className="text-gray-700 mb-3">Насколько вам понятно, зачем предусмотрены очередные взносы по программе?</p>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="Star" size={24} className="text-red-500 fill-current cursor-pointer hover:scale-110 transition-transform" />
              ))}
            </div>
          </div>
        </div>

        {/* Payment Timeline */}
        <div className="bg-gray-50 px-6 py-6">
          <h3 className="font-semibold text-gray-900 mb-3">Срок проведения платежа</h3>
          <p className="text-gray-700 mb-4">
            Зачисление денежных средств на счет по договору может осуществиться до 3 рабочих дней в зависимости от способа оплаты.
          </p>
          
          <h3 className="font-semibold text-gray-900 mb-3">Подтверждение оплаты</h3>
          <p className="text-gray-700 mb-4">
            Уведомление об успешной оплате взноса поступит в СМС на номер телефона, указанный в договоре. Электронный чек будет направлен на адрес электронной почты, который вы указали в форме оплаты.
          </p>

          {/* Contact Methods */}
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <Icon name="Check" size={14} className="text-white" />
              </div>
              <div>
                <strong>В личном кабинете.</strong> Оплоченные взносы смотрите во вкладке «График взносов».
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <Icon name="Check" size={14} className="text-white" />
              </div>
              <div>
                <strong>Через форму обратной связи</strong> на сайте.
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <Icon name="Check" size={14} className="text-white" />
              </div>
              <div>
                <strong>По телефону</strong> горячей линии <strong>8 800 333 84 48</strong><br />
                <span className="text-sm text-gray-600">с 8:00 до 20:00 мск, звонок по России бесплатный.</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            Данное письмо сформировано автоматически. Пожалуйста, не отвечайте на него.
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white px-6 py-6 border-t border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600 mb-1">С заботой о вас, команда</p>
              <p className="text-sm font-semibold text-gray-800">«АльфаСтрахование-Жизнь»</p>
              <div className="mt-2 space-y-1">
                <p className="text-xs text-blue-600 underline cursor-pointer">osjife.ru</p>
                <p className="text-xs text-gray-600">8 800 333 84 48</p>
              </div>
            </div>
            <div className="text-right text-xs text-gray-500">
              <p>Лицензия № 3447 от 16.09.2024</p>
              <p>Адрес: 115280, г. Москва вн. тер. г.</p>
              <p>муниципальный округ Данилович,</p>
              <p>проспект Андропова, д. 18, помещ. 2, 16</p>
              <p className="mt-2 text-blue-600 underline cursor-pointer">Отписаться от рассылки</p>
              <p className="mt-1">© 2025. Группа «АльфаСтрахование»</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;