new Vue(
    {
        el: '#root',
        data: {
            emails: []
        },
        created() {
            for (i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.emails.push(response.data.response)
                    })
            }
        },
    });