using DataIntegration.Core.REST.UrlParameters.Traits;
using System.Collections.Generic;

namespace DataIntegration.Core.REST.UrlParameters
{
    public class StandardArrayUrlParameter : BaseArrayUrlParameter, IWithCommaSeparatedArrayParamValues
    {
        string IUrlParameter.Key => _key;
        List<object> IWithArrayUrlParameter.Values => _values;

        public StandardArrayUrlParameter(string key, List<object> values) : base(key, values)
        {
        }

        public StandardArrayUrlParameter(string key, params object[] values) : base(key, values)
        {
        }
    }
}
