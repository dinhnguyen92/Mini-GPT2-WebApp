using DataIntegration.Core.REST.UrlParameters.Traits;

namespace DataIntegration.Core.REST.UrlParameters
{
    public class UrlParameter : IWithSingleValueUrlParameter
    {
        private readonly string _key;
        private readonly object _value;

        string IUrlParameter.Key => _key;
        object IWithSingleValueUrlParameter.Value => _value;

        public UrlParameter(string key, object value)
        {
            _key = key;
            _value = value;
        }
    }
}
