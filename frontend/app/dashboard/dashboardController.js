(function () {
    angular
        .module('primeiraApp')
        .controller('DashboardCtrl', DashboardController)

    DashboardController.$inject = ['$scope', '$http']

    function DashboardController($scope, $http) {
        const vm = this

        Object.assign(vm, {
            getSummary
        })

        function getSummary() {
            const url = 'http://localhost:3003/api/billingSummary' // hardcoded criar constants

            $http.get(url).then((response) => { // destructuring e default values
                const { credit = 0, debt = 0 } = response.data;
                
                vm.credit = credit;
                vm.debt = debt;
                vm.total = credit - debt;
            })
        }

        getSummary();
    }

})();

