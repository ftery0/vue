import { ref, onMounted } from 'vue';
import profileService, {
  type Profile,
  type Post,
} from '../../services/profile.service';

const defaultProfileImage = '/default-profile.png';

export default {
  setup() {
    const profile = ref<Profile>({
      _id: '',
      userId: '',
      email: '',
      name: '',
      followers: [],
      following: [],
    });
    const posts = ref<Post[]>([]);

    onMounted(async () => {
      const data = await profileService.getMyProfile();
      profile.value = data;
      posts.value = await profileService.getUserPosts(data._id);
    });

    return {
      profile,
      posts,
      defaultProfileImage,
    };
  },
};
