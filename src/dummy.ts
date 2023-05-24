const data = {
  id: '5',
  user_id: '5',
  completed: true,
  cancelled: false,
  kitchen_cancelled: false,
  kitchen_accepted: true,
  kitchen_dispatched: true,
  kitchen_dispatched_time: '2023-05-17T10:38:26.190Z',
  completed_time: '2023-05-17T11:04:38.450Z',
  rider_id: '2',
  kitchen_prepared: true,
  rider_assigned: true,
  paid: true,
  order_code: 'backend1001',
  order_change: null,
  calculated_order_id: '1',
  created_at: '2023-05-17T09:47:30.455Z',
  updated_at: '2023-05-17T11:04:38.454Z',
  logs: [
    {
      time: '2023-05-17T09:47:30.455Z',
      description: 'Order received in kitchen',
    },
    {
      time: '2023-05-17T09:47:47.716Z',
      description: 'Order accepted by kitchen',
    },
    {
      time: '2023-05-17T10:32:32.907Z',
      description: 'Order completed by kitchen',
    },
    {
      time: '2023-05-17T10:38:26.190Z',
      description: 'Order dispatched by front desk',
    },
    {
      time: '2023-05-17T11:04:38.448Z',
      description: 'Trip Completed By Rider(James)',
    },
  ],
  kitchen_verified_time: '2023-05-17T09:47:30.455+00:00',
  kitchen_completed_time: '2023-05-17T10:32:32.907+00:00',
  shop_accepted: true,
  shop_prepared: true,
  no_of_mealbags_delivered: 0,
  no_of_drinks_delivered: 0,
  rider_started_time: null,
  rider_started: false,
  rider_arrived_time: null,
  rider_arrived: false,
  is_failed_trip: false,
  failed_trip_details: {},
  box_number: 'TABLE',
  shelf_id: null,
  order_total_amount_history: [
    {
      time: '2023-05-17T09:47:30.302Z',
      total_amount: 26785,
    },
  ],
  scheduled: false,
  confirmed_by_id: null,
  completed_by_id: null,
  scheduled_delivery_date: null,
  scheduled_delivery_time: null,
  is_hidden: false,
  calculated_order: {
    id: '1',
    total_amount: '26785',
    free_delivery: false,
    delivery_fee: '900',
    service_charge: '0',
    address_details: {
      city: 'Lekki',
      name: 'Current',
      address_line: 'Lekki, Lagos, Nigeria',
      building_number: 'No.',
    },
    meals: [
      {
        brand: {
          id: '1',
          name: 'Jollof & Co.',
        },
        meals: [
          {
            id: 'm1',
            new: true,
            name: 'Pepper Rice Special',
            brand: {
              id: '1',
              name: 'Jollof & Co.',
            },
            active: true,
            addons: [
              {
                id: '1',
                amount: 780,
                meal_id: 'm1',
                meal_data: {
                  id: 'm2',
                  name: 'Extra portion',
                  active: true,
                  amount: '780',
                  brand_id: '1',
                  item_type: 'FOOD',
                  created_at: '2023-05-05T03:01:53.549Z',
                  updated_at: '2023-05-05T03:01:53.549Z',
                },
                created_at: '2023-05-05T03:01:53.552Z',
                updated_at: '2023-05-05T03:01:53.552Z',
                meal_addon_id: '1',
                internal_profit: 0,
                min_selection_no: '0',
                meal_addon_category_id: 'md1',
              },
              {
                id: 'a44',
                amount: 2350,
                images: {},
                meal_id: 'm1',
                is_combo: false,
                position: 6,
                quantity: 1,
                meal_data: {
                  id: 'm5',
                  new: false,
                  name: 'Peppered Turkey.',
                  active: true,
                },
                created_at: '2023-05-05T02:52:31.704Z',
                updated_at: '2023-05-05T02:52:31.704Z',
                posist_data: {},
                meal_addon_id: '2839f8b1-6b20-421c-bdbb-28e70001334f',
                internal_profit: 0,
                min_selection_no: '0',
                meal_addon_category_id: '001b1dbf-38ef-462c-b045-598459f03a24',
              },
            ],
            amount: '1550',
            images: [
              'https://d3u7b9fq2opvwp.cloudfront.net/upload-service/1683254602568a1306e1c-1ff3-486f-9e1b-a7057a823213',
            ],
            alcohol: false,
            item_no: null,
            summary: null,
            brand_id: '1',
            calories: ' ',
            is_addon: false,
            is_combo: false,
            position: 7,
            quantity: 1,
            home_page: false,
            item_type: 'FOOD',
            meal_tags: [],
            created_at: '2023-05-05T02:43:33.963Z',
            is_deleted: false,
            order_note: '',
            updated_at: '2023-05-05T02:43:33.963Z',
            description:
              'White rice wrapped in banana leaves served with special pepperstew',

            minimum_age: '0',
            posist_data: {},
            available_no: 'INFINITE',
            meal_keywords: [],
            internal_profit: 0,
            meal_category_id: '3dbc3bb6-45ac-4c96-a856-302ef79d1e36',
          },
        ],
        amount: 7080,
        internal_profit: 0,
      },
    ],
    lat: '6.453235649711961',
    lng: '3.542877760780109',
    cokitchen_polygon_id: 's2',
    user_id: '2',
    cokitchen_id: '3',
    pickup: false,
    prev_price: '15030',
  },
  order_type: {
    id: 's1',
    name: 'CARD',
    created_at: '2021-07-05T16:39:52.782024+00:00',
    updated_at: '2021-07-05T16:39:52.782024+00:00',
  },
};
