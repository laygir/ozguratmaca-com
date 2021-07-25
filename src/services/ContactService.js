import ApiService from '@/services/ApiService';

const resource = '/contact';

export default {
  async sendEmail(payload) {
    return ApiService.post(`${resource}`, payload);
  },
};
