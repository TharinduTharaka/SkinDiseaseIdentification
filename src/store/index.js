import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: 'm1',
                    image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/guide_to_unusual_skin_conditions_slideshow/1800ss_eksfoliaciya_rm_cutaneous_peeling_skin_syndrome.jpg',
                    title: 'Peeling Skin Syndrome',
                    description: 'It\'s like having lifelong sunburn, where you can pull up a sheet of the top layer of skin. It doesn\'t hurt, but your skin often itches and can get red, dry, thick, and blistered. Because it\'s genetic, this usually starts happening when you\'re quite young. Petroleum jelly, to soften skin, and medicines you put on warts and calluses might make it feel and look better, but other typical skin treatments don\'t help and could even be harmful.'
                },
                {
                    id: 'm2',
                    image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/guide_to_unusual_skin_conditions_slideshow/1800ss_mcgraw_hill_rf_chromhidrosis.jpg',
                    title: 'Chromhidrosis',
                    description: 'Yellow, green, blue, brown, or black sweat? Yes! People with this condition have sweat glands that make too much lipofuscin (a pigment in human cells) or the lipofuscin is chemically different than normal. Colored sweat can appear in underarms, on the face, or in the dark circle around nipples. To stop it, you need to shut down the sweat glands. That could mean you apply a cream every day or get regular Botox shots.'
                },
                {
                    id: 'm3',
                    image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/guide_to_unusual_skin_conditions_slideshow/1800ss_medical_images_rm_necrobiosis_lipoidica_sore_on_leg.jpg',
                    title: 'Necrobiosis Lipoidica',
                    description: 'Small, raised, red spots -- usually on your shins -- slowly grow into larger, flatter patches. These have a red border and a shiny, yellowish center, and they probably won\'t go away. The skin is thin and may split easily to form slow-healing sores called ulcers that might lead to skin cancer. People who get this condition likely have diabetes or will have it soon. Your doctor may wait on treatment if you don\'t have ulcers yet.'
                },

            ]
        };
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: memoryData.id,
                title: memoryData.title,
                image: memoryData.image,
                description: memoryData.description
            };
            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find((memory) => memory.id === memoryId);

            };
        }
    }

});
export default store;