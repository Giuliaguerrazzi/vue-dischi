const app = new Vue({
    el: '#app',
    data: {
        cds: [],
        actualGenre: 'all',
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then (result => {
            console.log(result.data);

            this.cds = result.data.response;
        })
        .catch (error => {
            console.log(error);
        });
    },
    methods: {
        filterGenre() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
                // tutti non filtrati
                let cdsList = result.data.response;

                if (this.actualGenre !== 'all') {
                    cdsList = cdsList.filter( cd => cd.genre.toLowerCase() === this.actualGenre );
                }

                this.cds = cdsList;
            })
            .catch(error => {});
        }
    }
});   