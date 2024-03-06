using DataIntegration.Core.REST.UrlParameters.Traits;
using System.Collections.Generic;

namespace DataIntegration.Core.REST.UrlParameters
{
    public class AspNetArrayUrlParameter : BaseArrayUrlParameter, IWithAspNetArrayParamValues
    {
        string IUrlParameter.Key => _key;
        List<object> IWithArrayUrlParameter.Values => _values;

        public AspNetArrayUrlParameter(string key, List<object> values) : base(key, values)
        {
        }

        public AspNetArrayUrlParameter(string key, params object[] values) : base(key, values)
        {
        }
    }
}
