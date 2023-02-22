import { configureStore} from '@reduxjs/toolkit';
import authReduser from '../redux/auth/authReduser';
import dashboardReduser from '../redux/dashboard/dashboardReduser';

const store = configureStore({
    reducer: {
        auth: authReduser,
        dashboard: dashboardReduser,
    }
})

export default store;